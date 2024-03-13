import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>PhotoPage</div>
      <div>
        User {id}, photo {photoId}
      </div>
    </>
  );
};

export default PhotoPage;
