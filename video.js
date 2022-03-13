

    let rec_div = document.getElementById("reco");

    var {videoId} = JSON.parse(localStorage.getItem("clicked_video"));
    let {title} = JSON.parse(localStorage.getItem("clicked_video"));
    let {desc} =  JSON.parse(localStorage.getItem("clicked_video"));
   

    let video_div = document.getElementById("video_details");

    let iframe = document.createElement('iframe');

    var reco_div = document.getElementById("reco");


    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "100%"
    iframe.height = "100%";

    let ti = document.createElement("h3");
    ti.innerHTML =  `https://www.youtube.com/embed/${title}`;
   

    iframe.setAttribute("allowfullscreen", true);

    video_div.append(iframe,ti,desc)
    // rec_div.append(iframe)

    async function getrecovideos(){
        try{
        let video_q = document.getElementById("video").value;

            let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_q}&key=AIzaSyC1AM4Zi4wUZt_7VKL0OGxufDcTlHwzX3M&maxResults=20&regionCode=IN`)

            let data = await response.json();

            let videos = data.items;
            showData(data)
        }
        catch(e){

        }
    }
    getrecovideos()

    function showData(data){
        data.forEach(function(el){
            // console.log("el",el)
            let {id} = el;

            let v_id = el.id.videoId;

            let reco_div = document.getElementById("reco");

        let{ 
            id:{videoId},
            } = el;

            console.log("VideoId:",videoId);

            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`;

            iframe.height = "250px";
            iframe.width = "250px";
            iframe.setAttribute("allowfullscreen", true)
            reco_div.append(iframe)


        });

    };
    showData()
