import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { blogCardData } from "../../data/blogCardData";

const ImageListSection = () => {
  return (
    <div className="contain py-8 lg:pt-12 lg:pb-[72px]">
      <ImageList
        sx={{
          width: "100%",
          display: {
            xs: "block",
            sm: "grid",
          },
        }}
        cols={3}
        gap={20}
      >
        {blogCardData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ marginBottom: "12px", width: "100%" }}
          >
            <Card sx={{ maxWidth: "100%", boxShadow: "none" }}>
              <CardMedia
                sx={{ height: 280, width: "100%" }}
                image={item.img}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "0px", paddingRight:"0px" }}>
                <div className="text-[14px] font-[500] mb-4 flex justify-between">
                  <div>{item.names}</div>
                  <div>{item.date}</div>
                </div>
                <h3 className="font-[600] lg:whitespace-nowrap">{item.title}</h3>
              </CardContent>
              <CardActions className="p-0">
                <div className="font-[400] text-[15px text-black">
                  {item.subtitle}
                </div>
              </CardActions>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageListSection;
