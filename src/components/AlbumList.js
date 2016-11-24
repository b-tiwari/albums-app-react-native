//import libraries that help to create  component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//create component
class AlbumList extends Component {
    //create a class-level variable
    state = {albums: []}; 

    componentWillMount(){
        console.log ('componentWillMount--1234');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(albums => {
            console.log('length=' + JSON.stringify(albums.data.length));
            this.setState({ albums: albums.data });
        });
    }

    renderAlbums() {
        return this.state.albums
                .map(album => 
                <AlbumDetail key={album.title} album={album}></AlbumDetail>
            );
    }

    render() {
        //console.log('state is=' + this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

//export component
export default AlbumList;