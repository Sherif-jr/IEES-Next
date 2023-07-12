"use client";
import PropTypes from "prop-types";
import { Player } from "@lottiefiles/react-lottie-player";
export default function LottiePlayer(props) {
  return <Player {...props} />;
}
LottiePlayer.propTypes = {
  props: PropTypes.shape(Player.propTypes),
};
