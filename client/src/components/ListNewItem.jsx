import { useState } from 'react';
import './App.css';

function ListNewItem(props) {
  const [itemName, setName] = useState('');
  const [itemPrice, setPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [imgUrl, setImgUrl] = useState(); //file
  const [image, setImage] = useState('');
  const [itemLink, setItemLink] = useState('');

  function handleImgUpload(e) {
    // console.log(e.target.files);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setImage(imgUrl);
  }
  function removeImg() {
    setImage('');
    setImgUrl('');
  }
  function handleLinkChange(e) {
    const { value } = e.target;

    setItemLink(value);
    setImgUrl(value);
  }
  function handleNameChange(e) {
    const { value } = e.target;

    setName(value);
  }
  function handlePriceChange(e) {
    const { value } = e.target;

    setPrice(value);
  }
  function handleLocalImgUpload() {
    setItemLink('');
    setImgUrl('');
  }
  function handleDescriptionChange(e) {
    const { value } = e.target;

    setItemDescription(value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onTap();

    try {
      const res = await fetch('https://olxcloneserver.cyclic.app/new-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            itemName: itemName,
            itemPrice: itemPrice,
            itemImgUrl: imgUrl,
            itemDescription: itemDescription,
            userName: props.userName,
            userId: props.userId,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" font-allerta  px-[5%] pt-[15%] pb-[50%] lg:p-[2%_25%_15%]">
      <form
        className="shadow-xl p-4 lg:p-[5%] bg-[#ddd2f3] rounded-lg"
        onSubmit={handleSubmit}
      >
        <label htmlFor="itemName">
          Item Name <span className="text-red-500">*</span>
        </label>
        <input
          className="block border-none rounded-md w-[100%] h-[2rem] m-[3%_0] focus:outline-none"
          id="itemName"
          type="text"
          value={itemName}
          onChange={handleNameChange}
          name="itemName"
        />
        <label className="text-md m-[1%_0]" htmlFor="itemPrice">
          Item Price <span className="text-red-500">*</span>
        </label>
        <input
          className="block border-none rounded-md w-[100%] px-2 h-[2rem] m-[3%_0] focus:outline-none"
          id="itemPrice"
          type="number"
          value={itemPrice}
          onChange={handlePriceChange}
          name="itemPrice"
        />
        <label htmlFor="itemDescription">Item Description</label>
        <textarea
          className="block border-none rounded-md w-[100%] m-[3%_0] focus:outline-none"
          id="itemDescription"
          type="text"
          value={itemDescription}
          onChange={handleDescriptionChange}
          name="itemDescription"
        />
        <label className="text-md m-[1%_0]" htmlFor="uploadedImg">
          Item Image Url/Link
        </label>
        <input
          className="block border-none rounded-md w-[100%] px-2 h-[2rem] m-[3%_0] focus:outline-none"
          id="itemLink"
          type="text"
          value={itemLink}
          onChange={handleLinkChange}
          name="itemLink"
        />
        <center className="text-lg">
          <span className="py-2 px-4 bg-violet-100 rounded-lg">OR</span>
        </center>
        <input
          type="file"
          onClick={handleLocalImgUpload}
          id="uploadedImg"
          className="py-4 file:bg-white file:cursor-pointer file:p-2 hover:file:text-purple-700 file:text-purple-600 file:rounded file:shadow file:border-none"
          name="uploadedImg"
          onChange={handleImgUpload}
          value={image}
          accept="image/png, image/jpeg,image/jpg,image/webp"
        />
        {imgUrl ? (
          <div>
            {' '}
            <img className="h-40 w-40 " src={imgUrl} alt="uploaded-img" />{' '}
            <button
              onClick={removeImg}
              className="p-2 my-4 text-white rounded-lg shadow-md bg-red-500 hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ) : (
          ''
        )}
        <div className="messageDiv">
          <p
            className="m-0"
            style={
              itemName && itemPrice
                ? { visibility: 'hidden' }
                : { color: '#9b1414' }
            }
          >
            Please fill in the required fields *
          </p>
        </div>
        <center>
          {' '}
          <button
            className="bg-[#8c52ff]  border-[#8c51ff] hover:bg-[#9460fd] shadow-lg active:translate-y-0.5  text-white text-xl w-[66%] p-[2%] m-[3%_0] rounded-2xl border-2"
            type={itemName && itemPrice ? 'submit' : 'button'}
          >
            {' '}
            Add New Item
          </button>
        </center>{' '}
      </form>
    </div>
  );
}

export default ListNewItem;
