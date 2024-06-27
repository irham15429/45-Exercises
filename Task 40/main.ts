 //define the make_album function

 function make_album(artist_name: string, album_title:string, tracks?:number){
    let album:{artist: string, title: string,tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };
    if(tracks!== undefined){
        album.tracks = tracks;
    }
    return album;
 }

 //calling three function and creating 3 variables with different values
 
 let album1 = make_album("hamza","album title 1");
 let album2 = make_album("usman","album title 2");
 let album3 = make_album("ali","album title 3", 10);

 //printing the varibles

 console.log(album1);
 console.log(album2); 
 console.log(album3);