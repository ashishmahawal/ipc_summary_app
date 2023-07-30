from langchain import PromptTemplate

class CustomPromptTemplates:
    def __init__(self):
        self.ipc_template = '''
        You are an experienced Indian lawyer.
        Explain Indian Penal Code {code} in language {lang} with a case example
        '''

        self.diatecian_template = '''
        You are an experienced Indian food diatecian.
        Suggest a diet schedule for {duration} of type {type} condition {condition} and age {age} in language {lang}
        '''

        self.chemistry_teacher_template = '''
        You are an experienced Chemistry Teacher.
        Please answer this chemistry question {question}
        '''

    @property
    def ipc_prompt(self):
        return PromptTemplate(input_variables=['code','lang'],template=self.ipc_template)
    
    @property
    def diatecian_prompt(self):
        return PromptTemplate(input_variables=['duration','type','condition','age','lang'],template=self.diatecian_template)

    @property
    def chemistry_teacher_prompt(self):
        return PromptTemplate(input_variables=["question"],template=self.chemistry_teacher_template)