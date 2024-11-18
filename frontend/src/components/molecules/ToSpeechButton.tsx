import React, {FC} from 'react';
import IconButton from "../atom/IconButton";
import ttsIcon from '../../assets/tts.png';

interface ToSpeechButtonProps {
    onClick: () => void;
    inverseColor?: boolean;
}

const ToSpeechButton: FC<ToSpeechButtonProps> = ({onClick, inverseColor = false}) => {
    return <IconButton onClick={onClick} iconSrc={ttsIcon} className="to-speech-button" size={35} iconSize={50} isCircular={false} inverseColor={inverseColor}/>;
};

export default ToSpeechButton;