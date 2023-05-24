export const getImage = async () => {
  try {
    const apiKey = "8Z1qzXpXYEqIgNoTaqbR6McuMNUipsjO";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "We could not find the image";
  }
};
