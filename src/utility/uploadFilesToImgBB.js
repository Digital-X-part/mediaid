const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
console.log();
    // Replace 'YOUR_API_KEY' with your actual imgbb API key
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    // console.log(data);
    return data.data;
  };

export default uploadImage;