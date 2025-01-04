
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import laravel from "../assets/laravel.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import sql from "../assets/sql.png";
import firebase from "../assets/firebase.png";
const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="skills">
      <h1 className="font-rowdies text-5xl text-active">My Skills</h1>
      <div className="py-8">
        <div className=" grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-8">
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={html} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-html text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={css} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-css text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={js} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-js text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={tailwind} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-tailwind text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={bootstrap} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-bootstrap text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={react} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-react text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={vue} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-vue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={laravel} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-laravel text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={express} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-white text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={mongo} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-mongo text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={sql} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-html text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="bg-nav rounded-lg p-2 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center items-between">
            <div className="flex justify-center items-center">
              <img src={firebase} alt="" className="size-16 md:size-28 lg:size-20 xl:size-28" />
            </div>
            <div className="w-full bg-white rounded-full dark:bg-gray-700">
              <div className="bg-firebase text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
