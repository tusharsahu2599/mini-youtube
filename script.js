let data_div = document.getElementById("data");

async function searchvideo(){

    try{
        let video_q = document.getElementById("video").value;

        let res = await fetch(
 `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_q}&key=AIzaSyC1AM4Zi4wUZt_7VKL0OGxufDcTlHwzX3M&maxResults=20&regionCode=IN`)
        
        let data = await res.json();

        let videos = data.items;

        appendVideos(videos);


        console.log("data:",data)
    }
    catch(err){
        console.log("err:",err)
    }
}
searchvideo()

// function appendVideos(videos)

//     const appendVideos = (items) =>{
// data_div.innerHTML = "";

//     items.forEach((el)=>{
//         // console.log("el:",el)
//         // let {id} = el;
//         // console.log("id",id)
//         // // let v_id = el.id.videoId;
// // let data_div = document.getElementById("data");
// // data_div.innerHTML=;


//         let{ 
//             id:{videoId},
//             } = el;

//             console.log("VideoId:",videoId);

//             let iframe = document.createElement("iframe");
//             iframe.src = `https://www.youtube.com/embed/${videoId}`;

//             iframe.height = "250px";
//             iframe.width = "250px";
//             iframe.setAttribute("allowfullscreen", true)
//             data_div.append(iframe)
//         });

    // };

    const appendVideos = (items) =>{
        data_div.innerHTML = ""
        
        items.forEach(({snippet, id:{videoId} })=> {

            let div = document.createElement("div");
            div.setAttribute("id", "vdata")

            let title = document.createElement("h3");
            title.innerText = snippet.title;

            let thumbnail = document.createElement('img');
            thumbnail.src = snippet.thumbnails.medium.url;
            thumbnail.setAttribute("id", "timg")

            // let img = document.createElement('img');
            // img.src = snippet.thumbnails.high.url;

            let ctitle = document.createElement('p');
            ctitle.innerHTML = snippet.channelTitle;

            // let desc = document.createElement('p');
            // desc.innerText = snippet.description;
            


            let data_to_send = {
                snippet,
                videoId,
                title,
                ctitle
                // desc
            }

            div.onclick = () =>{
                showVideo(data_to_send)
        }


            div.append(thumbnail,title,ctitle);
            data_div.append(div);  
        });
    }

    function showVideo(data){
        localStorage.setItem('clicked_video', JSON.stringify(data))

        window.location.href = "video.html";
    }
