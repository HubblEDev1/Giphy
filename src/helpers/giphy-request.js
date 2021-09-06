export const GiphyRequest = async (category) => {
    //F1xbfXQYRd4TbQFHl9rwkVJjsAU4ANxK
    //api.giphy.com/v1/gifs/search?api_key=F1xbfXQYRd4TbQFHl9rwkVJjsAU4ANxK&q=car
    const apiKey = 'F1xbfXQYRd4TbQFHl9rwkVJjsAU4ANxK';
    const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=20`);//encodeURI allow us to trim
    const {data} = await request.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}

