import React, {useState} from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Manga",
    "Romance",
    "Fantasy",
    "Thriller",
    "Horror",
    "Science Fiction",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "children Books",
    "Travel"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event)=>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle Book submissions
  const handleBookSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj = {
      bookTitle,authorName,imageURL,category, bookDescription, bookPDFURL
    }
    console.log(bookObj);

    //send data to database

    fetch("http://localhost:5000/upload-book",{
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
      alert("Book uploaded successfully!!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

        <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          {/* first Row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
              </div>
              <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
            </div>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput id="authorName" name="authorName" type="text" placeholder="Author name" required />
            </div>
          </div>
          {/* Second Row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Book Image URL" />
              </div>
              <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
            </div>
            {/* Category */}
            <div className='lg:w-1/2'>
            <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>

              <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                {
                  bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
              </Select>
            </div>
          </div>

          {/* Third Row - Book description */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." required 
            className='w-full'
            rows={7} />
          </div>

          {/*book pdf link*/}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput id="bookPDFURL" 
            name='bookPDFURL'
            type="text" placeholder="book PDF URL" required />
          </div>

          <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  )
}

export default UploadBook