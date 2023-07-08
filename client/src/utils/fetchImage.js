import axios from "axios";

const fetchImage = async (featured_media) => {
  try {
    const link = await axios.get(
      `https://blog.cnc-animalhealth.com/wp-json/wp/v2/media/${featured_media}`
    );
    return link.data.media_details.sizes.full.source_url;
  } catch (err) {
    console.log(err);
  }
};

export default fetchImage;
