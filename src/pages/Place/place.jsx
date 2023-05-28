import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./place.css";

const PlaceInfo = () => {
  const [placeInfo, setPlaceInfo] = useState({});
  const {id} = useParams(); 
  let place = useLocation();
  let placeId = place.state.each;
  useEffect(() => {
    handleImageClick(placeId);
    console.log("place",placeId)
  }, [placeId]);
  const handleImageClick = () => {
    fetch(`http://localhost:5000/place/${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("response",data);
        console.log(id)
        setPlaceInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    $(function () {
      $("#thumbnail li").click(function () {
        var thisIndex = $(this).index();

        if (thisIndex < $("#thumbnail li.active").index()) {
          prevImage(
            thisIndex,
            $(this).parents("#thumbnail").prev("#image-slider")
          );
        } else if (thisIndex > $("#thumbnail li.active").index()) {
          nextImage(
            thisIndex,
            $(this).parents("#thumbnail").prev("#image-slider")
          );
        }

        $("#thumbnail li.active").removeClass("active");
        $(this).addClass("active");
      });
    });

    var width = $("#image-slider").width();

    function nextImage(newIndex, parent) {
      parent
        .find("li")
        .eq(newIndex)
        .addClass("next-img")
        .css("left", width)
        .animate({ left: 0 }, 600);
      parent
        .find("li.active-img")
        .removeClass("active-img")
        .css("left", "0")
        .animate({ left: -width }, 600);
      parent.find("li.next-img").attr("class", "active-img");
    }

    function prevImage(newIndex, parent) {
      parent
        .find("li")
        .eq(newIndex)
        .addClass("next-img")
        .css("left", -width)
        .animate({ left: 0 }, 600);
      parent
        .find("li.active-img")
        .removeClass("active-img")
        .css("left", "0")
        .animate({ left: width }, 600);
      parent.find("li.next-img").attr("class", "active-img");
    }
  }, []);

  return (
    <div id="slider-wrapper">
      <div id="image-slider">
        <ul>
          <li className="active-img">
            <img src={placeInfo.mainImage}></img>
          </li>
        </ul>
      </div>

      <div id="thumbnail">
        <ul>
          <li className="active">
            <img
              src="https://40.media.tumblr.com/tumblr_m92vwz7XLZ1qf4jqio1_540.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://36.media.tumblr.com/0eb59d5c5bc5cde7737bb99d527247ca/tumblr_nxi8jzk8OS1rwfs76o1_540.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://40.media.tumblr.com/d4e261711a84707195d8fb9b0a94dccb/tumblr_o05avp3WSh1rn52wlo1_540.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://40.media.tumblr.com/817bd6a18d9ca6877c9d5a1b7d33c198/tumblr_mx1cizinbl1qljihqo1_540.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://40.media.tumblr.com/6fbf40647afad248b55af46361aea7f9/tumblr_nvdl4xGcxB1r3zwc2o1_540.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://41.media.tumblr.com/77a37a7053a8d4b7b11be6d0bfed1073/tumblr_n7eb66mNme1se0g8bo1_540.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://40.media.tumblr.com/tumblr_mbupbf3nR31rfxi00o1_r1_540.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlaceInfo;
