import React, {useState}from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea} from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Comics",
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
  const handleUpdate = (event)=>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const updateBookObj = {
      bookTitle,authorName,imageURL,category, bookDescription, bookPDFURL
    }
    //console.log(bookObj);  
    //update book data
    fetch(`https://book-store-app-1-49c8.onrender.com/book/${id}`,{
      method: 'PATCH',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(updateBookObj),
    }).then(res=>res.json()).then(data=>{
      alert("Book is updated successfully!!")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          {/* first Row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
              </div>
              <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required defaultValue={bookTitle}/>
            </div>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput id="authorName" name="authorName" type="text" placeholder="Author name" required 
              defaultValue={authorName}/>
            </div>
          </div>
          {/* Second Row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Book Image URL" />
              </div>
              <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required defaultValue={imageURL}/>
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
            rows={7} 
            defaultValue={bookDescription}/>
          </div>

          {/*book pdf link*/}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput id="bookPDFURL" 
            name='bookPDFURL'
            type="text" placeholder="book PDF URL" required 
            defaultValue={bookPDFURL}/>
          </div>

          <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  )
}

export default EditBooks