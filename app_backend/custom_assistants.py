import os
from dotenv import load_dotenv, find_dotenv
from langchain.llms import OpenAI
from langchain import PromptTemplate
from prompt_templates import CustomPromptTemplates

load_dotenv(find_dotenv(),override=True)

#CODE starts from here
logger_basestr = "=================================================="

prompt = CustomPromptTemplates()

class CustomAssistants:
    def __init__(self) -> None:
        self.llm = OpenAI(model='text-davinci-003',temperature=0.7,max_tokens=1024)
    
    '''
    Explains the Indian Penal Code {code} in any language {lang}
    '''
    def getIPCSummary(self,code,lang):
        response = self.llm(prompt.ipc_prompt.format(code=code,lang=lang))
        print(f'{logger_basestr*2}\n{response}\n{logger_basestr*2}')
        return response

    def recommendDiet(self,duration,diet_type,condition,age,lang):
        response = self.llm(prompt.diatecian_prompt.format(duration=duration,type=diet_type,condition=condition,age=age,lang=lang))
        print(f'{logger_basestr*2}\n{response}\n{logger_basestr*2}')
        return response
    
    def getChemistryAnswers(self,question):
        response = self.llm(prompt.chemistry_teacher_prompt.format(question=question))
        print(f'{logger_basestr*2}\n{response}\n{logger_basestr*2}')
        return response
