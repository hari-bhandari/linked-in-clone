import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendaViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from './Post'
import { db } from './firebase'
import firebase from "firebase"
import FlipMove from "react-flip-move"

function Feed() {
    const [posts, setPosts] = useState ([])
    const [input, setInput] = useState ("")

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
        
    }, [])

    const sendPost = (e) => {
        e.preventDefault ();

        db.collection("posts").add({
            name: "Seemore Butts",
            description: "CEO at Seeing More Butts",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp (),
        });
        setInput ("");
    };

    return (
        <div>
           <div className = "feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon />
                   <form>
                        <input value = {input} onChange={e => setInput (e.target.value)}  type="text" />
                        <button onClick={sendPost} type = "submit">Send</button>
                   </form>
               </div>

               <div className = "feed__inputOptions">
               <InputOption Icon = {ImageIcon} title ="Photo" color="#990000"  />
               <InputOption Icon = {SubscriptionsIcon} title ="Video" color="#990000"  />
               <InputOption Icon = {EventNoteIcon} title ="Event" color="#990000"  />
               <InputOption Icon = {CalendaViewDayIcon} title ="Write Article" color="#990000"  />
               </div>
           </div>
           <Post name= "Beany Baby" description= "Founder at your moma's place" message= 
                "your mom is still angry with me for rubbing pepper on her butt plug" 
                photoUrl="/images/bean.jpeg" avatar="/images/beany.jpg"/>
           <FlipMove>                
                {posts.map(({id, data:{name, description, message, photoUrl, avatar} }) => (
                    <Post
                            key= {id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                            avatar={avatar}
                    />
                ))}  
           </FlipMove> 
        </div>
    )
}

export default Feed
