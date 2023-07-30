from flask import Flask,request
from custom_assistants import CustomAssistants
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
custom_assistants = CustomAssistants()

@app.route('/ipc',methods=["GET"])
def baseRoute():
    code = request.args["code"]
    lang = request.args["lang"]
    response = custom_assistants.getIPCSummary(code,lang)
    return response

@app.route('/diet',methods=["GET"])
def getDiet():
    condition = request.args["condition"]
    age = request.args["age"]
    lang = request.args["lang"]
    diet_type = request.args["diet_type"]
    duration = request.args["duration"]
    response = custom_assistants.recommendDiet(duration,diet_type,condition,age,lang)
    return response

@app.route('/chemistry',methods=["GET"])
def getChemAnswer():
    question = request.args["question"]
    response = custom_assistants.getChemistryAnswers(question)
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)