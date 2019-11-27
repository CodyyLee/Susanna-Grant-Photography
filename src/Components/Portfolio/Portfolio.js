import React, {useState, useEffect} from "react";
import Gallery from "react-photo-gallery";

import img from "../../Images/image1.jpg";
import img1 from "../../Images/image2.jpg";
import img2 from "../../Images/image3.jpg";
import img3 from "../../Images/image4.jpg";
import img4 from "../../Images/image5.jpg";
import img5 from "../../Images/image6.jpg";
import img6 from "../../Images/image7.jpg";
import img7 from "../../Images/image8.jpg";
import img8 from "../../Images/image9.jpg";
import img9 from "../../Images/image10.jpg";
import img10 from "../../Images/image11.jpg";
import img11 from "../../Images/image12.jpg";
import img12 from "../../Images/image13.jpg";
import img13 from "../../Images/image14.jpg";
import img14 from "../../Images/image15.jpg";
import img15 from "../../Images/image16.jpg";
import img17 from "../../Images/image18.jpg";
import img18 from "../../Images/image19.jpg";
import img19 from "../../Images/image20.jpg";
import img20 from "../../Images/image21.jpg";
import img21 from "../../Images/image22.jpg";
import img22 from "../../Images/image23.jpg";
import img23 from "../../Images/image24.jpg";
import img24 from "../../Images/image25.jpg";
import img25 from "../../Images/image26.jpg";
import img26 from "../../Images/image27.jpg";
import img27 from "../../Images/image28.jpg";
import img28 from "../../Images/image29.jpg";
import img29 from "../../Images/image30.jpg";
import img30 from "../../Images/image31.jpg";

export default function Portfolio() {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        setPhotos([
            {
                src: `${img}`,
                height: 4,
                width: 3
            },

            {
                src: `${img1}`,
                height: 4,
                width: 3
            },

            {
                src: `${img2}`,
                height: 4,
                width: 3
            },

            {
                src: `${img3}`,
                height: 2,
                width: 2
            },

            {
                src: `${img4}`,
                height: 4,
                width: 2
            },

            {
                src: `${img5}`,
                height: 4,
                width: 3
            },

            {
                src: `${img6}`,
                height: 4,
                width: 3
            },

            {
                src: `${img7}`,
                height: 4,
                width: 3
            },

            {
                src: `${img8}`,
                height: 4,
                width: 3
            },

            {
                src: `${img9}`,
                height: 4,
                width: 3
            },

            {
                src: `${img10}`,
                height: 4,
                width: 3
            },

            {
                src: `${img11}`,
                height: 4,
                width: 3
            },

            {
                src: `${img12}`,
                height: 4,
                width: 3
            },

            {
                src: `${img13}`,
                height: 4,
                width: 3
            },

            {
                src: `${img14}`,
                height: 4,
                width: 3
            },

            {
                src: `${img15}`,
                height: 4,
                width: 3
            },

            {
                src: `${img17}`,
                height: 4,
                width: 3
            },

            {
                src: `${img18}`,
                height: 4,
                width: 3
            },

            {
                src: `${img19}`,
                height: 4,
                width: 3
            },

            {
                src: `${img20}`,
                height: 4,
                width: 3
            },

            {
                src: `${img21}`,
                height: 4,
                width: 3
            },

            {
                src: `${img22}`,
                height: 4,
                width: 3
            },

            {
                src: `${img23}`,
                height: 4,
                width: 3
            },

            {
                src: `${img24}`,
                height: 4,
                width: 3
            },

            {
                src: `${img25}`,
                height: 4,
                width: 3
            },

            {
                src: `${img26}`,
                height: 4,
                width: 3
            },

            {
                src: `${img27}`,
                height: 4,
                width: 3
            },

            {
                src: `${img28}`,
                height: 4,
                width: 3
            },

            {
                src: `${img29}`,
                height: 4,
                width: 3
            },

            {
                src: `${img30}`,
                height: 4,
                width: 3
            }
        ])
    }, [])

    function columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
        return columns;
    }

    return (
        <Gallery photos={photos} direction="column" columns={columns}/>
    )
}