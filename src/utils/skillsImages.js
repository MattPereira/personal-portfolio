import gcp from "../assets/svg/skills/gcp.svg";
import html from "../assets/svg/skills/html.svg";
import illustrator from "../assets/svg/skills/illustrator.svg";
import docker from "../assets/svg/skills/docker.svg";
import css from "../assets/svg/skills/css.svg";
import angular from "../assets/svg/skills/angular.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import nuxtJS from "../assets/svg/skills/nuxtJS.svg";
import react from "../assets/svg/skills/react.svg";
import svelte from "../assets/svg/skills/svelte.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import vue from "../assets/svg/skills/vue.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import bulma from "../assets/svg/skills/bulma.svg";
import capacitorjs from "../assets/svg/skills/capacitorjs.svg";
import coffeescript from "../assets/svg/skills/coffeescript.svg";
import memsql from "../assets/svg/skills/memsql.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";

import python from "../assets/svg/skills/python.svg";
import aws from "../assets/svg/skills/aws.svg";
import django from "../assets/svg/skills/django.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import gimp from "../assets/svg/skills/gimp.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";

import materialui from "../assets/svg/skills/materialui.svg";

import numpy from "../assets/svg/skills/numpy.svg";
import opencv from "../assets/svg/skills/opencv.svg";
import premierepro from "../assets/svg/skills/premierepro.svg";
import pytorch from "../assets/svg/skills/pytorch.svg";
import selenium from "../assets/svg/skills/selenium.svg";
import strapi from "../assets/svg/skills/strapi.svg";

import azure from "../assets/svg/skills/azure.svg";
import blender from "../assets/svg/skills/blender.svg";
import fastify from "../assets/svg/skills/fastify.svg";
import figma from "../assets/svg/skills/figma.svg";
import flutter from "../assets/svg/skills/flutter.svg";
import haxe from "../assets/svg/skills/haxe.svg";
import ionic from "../assets/svg/skills/ionic.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import picsart from "../assets/svg/skills/picsart.svg";
import sketch from "../assets/svg/skills/sketch.svg";
import unity from "../assets/svg/skills/unity.svg";
import wolframalpha from "../assets/svg/skills/wolframalpha.svg";

import canva from "../assets/svg/skills/canva.svg";

import flask from "../assets/svg/skills/flask.svg";
import express from "../assets/svg/skills/express.svg";
import ubuntu from "../assets/svg/skills/ubuntu.svg";
import github from "../assets/svg/skills/github.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;

    case "python":
      return python;
    case "aws":
      return aws;

    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;

    case "materialui":
      return materialui;

    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    case "flask":
      return flask;
    case "express":
      return express;
    case "ubuntu":
      return ubuntu;
    case "github":
      return github;
    default:
      break;
  }
};
