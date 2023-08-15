import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../../../LayOut/Container";

const PostAStory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="my-14">
        <h1 className="text-center text-3xl font-semibold mb-6">
          Post a story
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4">
          <div className="grid md:grid-cols-2 gap-4 ">
            <input
              placeholder="title"
              type="text"
              {...register("title")}
              className="input input-success"
            />
            <input
              placeholder="subtitle"
              type="text"
              {...register("subtitle")}
              className="input input-success"
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register("largePicture")}
              className="input input-success cursor-pointer"
            />

            <input
              placeholder="Day one morging title"
              type="text"
              {...register("morningTitle1")}
              className="input input-success"
            />
            <input
              placeholder="day one morging description"
              type="text"
              {...register("morningDescription1")}
              className="input input-success"
            />
            <input
              placeholder="Day one afternoon title"
              type="text"
              {...register("noonTitle1")}
              className="input input-success"
            />
            <input
              placeholder="Day one afternoon description"
              type="text"
              {...register("noonDescription1")}
              className="input input-success"
            />
            <input
              placeholder="Day one night title"
              type="text"
              {...register("nightTitle1")}
              className="input input-success"
            />
            <input
              placeholder="Day one night description"
              type="text"
              {...register("nightDescription1")}
              className="input input-success"
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register("firstPicture")}
              className="input input-success cursor-pointer"
            />
            <input
              placeholder="Day two morging title"
              type="text"
              {...register("morningTitle2")}
              className="input input-success"
            />
            <input
              placeholder="day two morging description"
              type="text"
              {...register("morningDescription2")}
              className="input input-success"
            />
            <input
              placeholder="Day two afternoon title"
              type="text"
              {...register("noonTitle2")}
              className="input input-success"
            />
            <input
              placeholder="Day two afternoon description"
              type="text"
              {...register("noonDescription2")}
              className="input input-success"
            />
            <input
              placeholder="Day two night title"
              type="text"
              {...register("nightTitle2")}
              className="input input-success"
            />
            <input
              placeholder="Day two night description"
              type="text"
              {...register("nightDescription2")}
              className="input input-success"
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register("secondPicture")}
              className="input input-success cursor-pointer"
            />
            <input
              placeholder="Day three morging title"
              type="text"
              {...register("morningTitle3")}
              className="input input-success"
            />
            <input
              placeholder="day three morging description"
              type="text"
              {...register("morningDescription3")}
              className="input input-success"
            />
            <input
              placeholder="Day three afternoon title"
              type="text"
              {...register("noonTitle3")}
              className="input input-success"
            />
            <input
              placeholder="Day three afternoon description"
              type="text"
              {...register("noonDescription3")}
              className="input input-success"
            />
            <input
              placeholder="Day three night title"
              type="text"
              {...register("nightTitle3")}
              className="input input-success"
            />
            <input
              placeholder="Day three night description"
              type="text"
              {...register("nightDescription3")}
              className="input input-success"
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register("thirdPicture")}
              className="input input-success cursor-pointer"
            />
          </div>
          <input type="submit" className="btn btn-primary w-full mt-4" />
        </form>
      </div>
    </Container>
  );
};

export default PostAStory;
