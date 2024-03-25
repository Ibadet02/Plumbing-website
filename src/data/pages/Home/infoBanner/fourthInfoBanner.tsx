import { InfoBannerProps } from "../../../../components/Banners/props";
import { CommentSliderProps } from "../../../../components/CommentSlider/props";
import { InfoBoxProps } from "../../../../components/props";
import user1 from "../../../../assets/images/user-1.jpg";
import user2 from "../../../../assets/images/user-2.jpg";
import user3 from "../../../../assets/images/user-3.jpg";
import user4 from "../../../../assets/images/user-4.jpg";
import user5 from "../../../../assets/images/user-5.jpg";
const fourthInfoBox: InfoBoxProps = {
  contentHeading: {
    text: "Testinomials",
    styles: {
      $isdark: true,
    },
  },
  heading: {
    text: "What our clients say about us",
    styles: {
      $isdark: true,
      fontWeight: "600",
    },
  },
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    styles: {
      $isdark: true,
    },
  },
  button: {
    text: 'View More...',
  },
  styles: {
    width: "auto",
  },
};

const firstCommentSlider: CommentSliderProps = {
  comments: [
    {
      id: 1,
      userName: "John Doe",
      status: "Professional",
      userImg: {
        src: user1,
        alt: "John Doe",
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "2021-06-01",
      rating: 5,
    },
    {
      id: 2,
      userName: "John Doe",
      status: "Professional",
      userImg: {
        src: user2,
        alt: "John Doe",
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "2021-06-01",
      rating: 5,
    },
    {
      id: 3,
      userName: "John Doe",
      status: "Professional",
      userImg: {
        src: user3,
        alt: "John Doe",
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "2021-06-01",
      rating: 5,
    },
    {
      id: 4,
      userName: "John Doe",
      status: "Professional",
      userImg: {
        src: user4,
        alt: "John Doe",
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "2021-06-01",
      rating: 5,
    },
    {
      id: 5,
      userName: "John Doe",
      status: "Professional",
      userImg: {
        src: user5,
        alt: "John Doe",
      },
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "2021-06-01",
      rating: 5,
    },
  ],
};

const fourthInfoBanner: InfoBannerProps = {
  infoBox: fourthInfoBox,
  commentSlider: firstCommentSlider,
};

export default fourthInfoBanner;
