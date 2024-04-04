async function apiBerita() {
    let resMedia = await fetch("https://api-berita-indonesia.vercel.app/");
    let dataMedia = await resMedia.json();
    const rowBerita = document.querySelector("#rowBerita");
    let listMedia = '';
    //   console.log(dataMedia.endpoints);
    dataMedia.endpoints.forEach(async (md) => {
        // console.log(md)
        let linkBerita = md.paths[0].path;
        // console.log(namaMedia, linkBerita);
        
        let resBerita = await fetch(linkBerita);
        let dataBerita = await resBerita.json();
        if(dataBerita.data !== null){
            let titleBerita = dataBerita.data.title;
            let descriptionBerita = dataBerita.data.description;
            let linkBerita = dataBerita.data.link;
            let imageBerita = dataBerita.data.image || '../assets/img/logo2.png';
            // console.log(dataBerita.data.posts);
            // console.log(titleBerita);
            // console.log(descriptionBerita);
            // console.log(linkBerita);
            // console.log(imageBerita);
            listMedia += `<div class="col-12">
                            <div class="card">
                                <div class="card-header bg-white shadow-sm">
                                    <div class="row">
                                        <div class="col-md-1 d-flex justify-content-center align-items-center">
                                            <img src="${imageBerita}" width="100%" />
                                        </div>
                                        <div class="col-md-11">
                                            <h4 class="text-primary m-0"><strong>${titleBerita}</strong></h4>
                                            <span>${descriptionBerita}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-3 pb-0">
                                    <div class="row justify-content-center">`;
            dataBerita.data.posts.forEach((pst) => {
                let tglPost = pst.pubDate.slice(0, 10);
                let jamPost = pst.pubDate.slice(11, 19);
                listMedia += `<div class="col-md-6 col-lg-4 d-flex">
                                <div class="card m-0 mb-3 shadow">
                                    <a href="#">
                                        <img class="card-img-top" src="${pst.thumbnail || 'assets/img/logo2.png'}" alt="${pst.title}">
                                    </a>
                                    <div class="card-body p-3">
                                        <small class="mb-2 d-block">${tglPost} ${jamPost}</small>
                                        <h5><a href="${pst.link}" target="_blank" class="text-primary"><strong>${pst.title}</strong></a></h5>
                                        <p class=" mb-0">${pst.description}</p>
                                    </div>
                                </div>
                            </div>`;
            })
            listMedia += `</div>
                    </div>
                </div>
            </div>`;
        }
        rowBerita.innerHTML = listMedia;
    });
}

apiBerita();
