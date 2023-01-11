import { useState } from 'react';
import './App.css';

function ListNewItem(props) {
  const [itemName, setName] = useState('');
  const [itemPrice, setPrice] = useState('');
  const [itemImgUrl, setUrl] = useState('');

  function handleNameChange(e) {
    const { value } = e.target;

    setName(value);
  }
  function handlePriceChange(e) {
    const { value } = e.target;

    setPrice(value);
  }
  function handleUrlChange(e) {
    const { value } = e.target;

    setUrl(value);
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
            itemImgUrl: itemImgUrl,
            userName: props.userName,
            userId: props.userId,
          },
        ]),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="itemFormDiv">
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">
          Item Name <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="itemName"
          type="text"
          value={itemName}
          onChange={handleNameChange}
          name="itemName"
        />
        <label htmlFor="itemPrice">
          Item Price <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="itemPrice"
          type="number"
          value={itemPrice}
          onChange={handlePriceChange}
          name="itemPrice"
        />
        <label htmlFor="itemImgUrl">Item Image Url/Link</label>
        <input
          id="itemImgUrl"
          type="text"
          value={itemImgUrl}
          onChange={handleUrlChange}
          name="itemImgUrl"
        />
        <div className="messageDiv">
          <p
            className="messageText"
            style={
              itemName && itemPrice
                ? { visibility: 'hidden' }
                : { color: 'red' }
            }
          >
            Please fill in the required fields *
          </p>
        </div>
        <center>
          {' '}
          <button
            className="addItemBtn"
            type={itemName && itemPrice ? 'submit' : 'button'}
          >
            Add New Item
          </button>
        </center>{' '}
      </form>
    </div>
  );
}

export default ListNewItem;
