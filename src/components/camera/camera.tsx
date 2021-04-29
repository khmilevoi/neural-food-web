import { useMediaStream } from "components/camera/useMediaStream";
import * as React from "react";

type CameraOutputProps = {};

export const CameraOutput: React.FC<CameraOutputProps> = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [stream] = useMediaStream();

    React.useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return <video ref={videoRef} autoPlay />;
};
