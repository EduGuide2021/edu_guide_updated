/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_COMMENT,
  CREATE_COMMUNITY,
  DELETE_COMMUNITY,
} from "../account/Graphql/Mutation";
import { GET_ALL_POSTS } from "../account/Graphql/Queries";
import icon from "../components/pics/icon7.png";
import icon1 from "../components/pics/icon2.png";
import { FacebookShareButton } from "react-share";
import { Input } from "antd";

function Community() {
  const { data } = useQuery(GET_ALL_POSTS);
  const [message, setMessage] = useState("");
  const [createCommunity, { error }] = useMutation(CREATE_COMMUNITY, {
    refetchQueries: [GET_ALL_POSTS],
  });
  const [deleteCommunity] = useMutation(DELETE_COMMUNITY, {
    refetchQueries: [GET_ALL_POSTS],
  });
  const [createComment, { loading: createCommentLoading }] = useMutation(
    CREATE_COMMENT,
    {
      refetchQueries: [GET_ALL_POSTS],
    }
  );
  const [communitiesData, setCommunitiesData] = useState([]);

  useEffect(() => {
    if (data?.getAllPost?.length > 0) {
      setCommunitiesData(
        data?.getAllPost?.map((item) => {
          return {
            ...item,
            commentText: "",
          };
        })
      );
    }
  }, [data]);

  const onComment = (community) => {
    if (community?.commentText?.length <= 0) {
      message.error("Please enter valid details..");
      return;
    }
    createComment({
      variables: {
        commentType: "community",
        content: community?.commentText,
        communityId: community?.id,
      },
    });
  };

  const userInfo = JSON.parse(localStorage.getItem("user"));
  if (error) {
    return <h1> {error?.message || "Something went wrong"} </h1>;
  }

  return (
    <div align="center">
      <h1>Community</h1>
      <text className="page-desc">Post and share your thoughts. let's have a discussion!</text>
      <br/>
      <div className="commdiv">
        <div className="commicon">
          <img src={icon1} alt="this is an icon"></img>
        </div>
    
        <textarea
          className="commfield"
          name="post"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
      </div>
      <br/>
      
      <button
        type="submit"
        className="postbtn"
        onClick={() => {
          createCommunity({
            variables: { comment: message, creator: userInfo?.id },
          });
          setMessage("");
        }}
      >
        
        Post
      </button>
      <img src="./icons/Line.png" className="line" alt="this is an imag."></img>
      {communitiesData &&
        communitiesData?.map((item, index) => (
          <div style={{ marginBottom: 20 }}>
            <div className="commdiv" style={{ marginBottom: -20 }}>
              <div className="commicon">
                <img src={icon} alt="this is icn"></img>
                <p>{item?.creator}</p>
              </div>
              <textarea
                className="comm_entry"
                value={item?.comment}
                disabled
                name="post"
              />
            </div>
            <div style={{ width: "45%", alignSelf: "flex-start" }}>
              {item?.comments?.map((item) => (
                <div style={{ background: "#ddd" }}>
                  <p style={{ textAlign: "left" }}>{item?.commentText}</p>
                </div>
              ))}
            </div>
            <Input
              value={item?.commentText}
              onChange={(e) => {
                let communities = [...communitiesData];
                communities[index].commentText = e.target.value;
                setCommunitiesData(communities);
              }}
              style={{ width: "25%", marginLeft: 80 }}
            />
            <button
              type="submit"
              className="commentbtn"
              style={{ marginLeft: 20 }}
              onClick={() => onComment(item)}
            >
              Comment
            </button>
            <button className="reg-btn">
              <FacebookShareButton
                url={"https://eduguide.ph"}
                quote={
                  "Hey everyone! EduGuide helped me choose the right program for me based on my interest and skills! Try it out on your own and find out yours! "
                }
                hashtag={"#eduguide #career #support #system #careerdecision"}
                description={`${item?.comment}`}
              >
                Share{" "}
              </FacebookShareButton>
            </button>
            <button type="submit" className="sharebtn">
              <a
                href="https://forms.office.com/r/Juc6FTPfKC"
                className="sharebtn"
                target="_blank"
              >
                Report
              </a>
            </button>
            {userInfo?.is_admin && (
              <button
                type="submit"
                className="deletebtn"
                style={{ marginLeft: 0 }}
                onClick={() => {
                  deleteCommunity({ variables: { id: item?.id } });
                }}
              >
                Delete
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default Community;
