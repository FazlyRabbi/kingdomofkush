import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Head from "next/head";

export default function SharePetition({ open, setOpen }) {
  const handleOpen = () => setOpen(!open);
  const shareUrl =
    "https://kingdomofkush-git-main-fazlyrabbi.vercel.app/petition";
  const title = "My awesome website";
  const quote = "Check out this awesome website!";
  const hashtags = ["#MyWebsite", "#NextJS", "#AwesomeWebsite"];

  return (
    <Fragment>
      <Head>
        <meta property="og:title" content={title} key="title" />
        <meta property="og:url" content={shareUrl} key="url" />
      </Head>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Please Share With Support </DialogHeader>
        <DialogBody divider>
          <div className="flex  px-6 justify-evenly items-center">
            <FacebookShareButton
              quote={"Kingdom of kush is..."}
              hashtag={"#kingdomofkush"}
              title="Hello world"
              url={shareUrl}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={"https://twitter.com/?lang=en/next-share"}
              quote={"Kingdom of kush is..."}
              hashtag={"#nextshare"}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton
              url={"https://www.linkedin.com/feed/next-share"}
              quote={"Kingdom of kush is..."}
              hashtag={"#nextshare"}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <WhatsappShareButton
              url={"https://web.whatsapp.com//next-share"}
              quote={"Kingdom of kush is..."}
              hashtag={"#nextshare"}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </Fragment>
  );
}
