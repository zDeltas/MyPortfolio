# -*- coding: utf-8 -*-

from os import link
from flask import Flask, render_template, request, flash, redirect
from app import utils
from app import app


@app.route("/")
def index():
    return render_template("home.html")


@app.route("/projects")
def projects():
    data = utils.jsonParse("static/projects/projects.json")["projects"]
    tags = utils.removeDupliFromList([t["tag"] for t in data])
    tagUser = request.args.get("tags")
    data.sort(key=utils.posProject, reverse=False)

    if tagUser is not None:
        data = [p for p in data if tagUser.lower() in [projectsTags[1].lower() for projectsTags in p['tag']]]

    return render_template("projects.html", projects=data, tags=tags, tagUser=tagUser)


@app.route("/projects/<name>")
def project(name):
    data = [project for project in utils.jsonParse("static/projects/projects.json")["projects"] if project['link'] == name][0]
    linkTxt = utils.get_file(["app","static","projects", data['link'], data['link']+ ".html"])
    dataTxt = open(linkTxt, "r", encoding="utf-8").read().split("\n")
    
    return render_template("project.html", project=data, explanations=dataTxt)


@app.route("/timeline")
def timeline():
    return render_template("timeline.html")