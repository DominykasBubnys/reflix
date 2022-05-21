import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import Styles from './Styles';
import CustomInput from "../formElements/Input";

const Comments = (props) => {

    const [newComment, setNewComment] = useState(null);

    const onCommentChangeHandler = (text) => {
        setNewComment(text)
    }

    const onCommentAddHandler = () => {
        setNewComment(null)
        console.log("Adding new comment: ", newComment);
        // later we will work with database and send that message to the server
    }

    // later comment will be accessing through movie.coments property (array);

    const Comments = [
        {
        comment: "pirmasis komentaras",
        author: "pirmasis"
        },

        {
        comment: "antrasis komentaras apie kazka kitka",
        author: "antrasis"
        },

        {
        comment: "treciasis komentaras apie gyvenima",
        author: "treciasis"
        },

    ]

    return (

        <ScrollView style={Styles.container}>

            <Text style={Styles.header}>Comments section</Text>

            <View>
                {Comments.map(comment => {
                    return <View style={Styles.content} key={Math.random()}>
                        <Text style={Styles.content_auth}>
                            Commented by: {comment.author}
                        </Text>
                        <Text style={Styles.content_text}>
                            {comment.comment}
                        </Text>
                    </View>
                })}
            </View>


            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <CustomInput onChange={onCommentChangeHandler} title="Leave a comment" />
                <Text onPress={onCommentAddHandler} style={{position:"absolute", left: 30, textAlign:"center", fontSize:70, color: "white"}}>+</Text>
            </View>


        </ScrollView>
        
    )
}

export default Comments