import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( { album } ) => {

    const { title, artist, thumbnail_image, image, url} = album;
    const { 
        thumbnailStyle, 
        cardTitleContent,
        thumbnailContainerStyle,
        titleTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle }>
                    <Image
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image}} />
                </View>
                <View style={cardTitleContent}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image}}/>
            </CardSection>

            <CardSection>
                <Button whenPressed={()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardTitleContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1 
    }
}

export default AlbumDetail;