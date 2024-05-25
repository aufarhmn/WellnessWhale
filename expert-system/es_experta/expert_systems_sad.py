from experta import *
import json

salience = 0.5

# Global variables to store data
diseases_list = []
diseases_symptoms = []
symptom_map = {}

def preprocess():
    global diseases_list, diseases_symptoms, symptom_map
    diseases = open("sad_diseases.txt")
    diseases_t = diseases.read()
    diseases_list = diseases_t.split("\n")
    diseases.close()
    
    for disease in diseases_list:
        disease_s_file = open("sad/" + disease + ".txt")
        disease_s_data = disease_s_file.read()
        s_list = disease_s_data.split("\n")
        diseases_symptoms.append(s_list)
        symptom_map[str(s_list)] = disease
        disease_s_file.close()

def identify_disease(*arguments):
    symptom_list = list(arguments)
    # Handle key error
    return symptom_map.get(str(symptom_list), None)

def if_not_matched(disease):
    print("")
    print("Kamu sepertinya mengalami %s\n" % (disease))

class Greetings(KnowledgeEngine):

    @DefFacts()
    def _initial_action(self):
        print("Loading data...")
        preprocess()
        yield Fact(action="is_disease")

    # Asking questions to identify symptoms
    @Rule(Fact(action='is_disease'), NOT(Fact(sleep_problems=W())), salience=1)
    def symptom_1(self):
        self.declare(Fact(sleep_problems=input("Apakah Anda memiliki kesulitan tidur atau merasa terlalu lelah? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(interest_loss=W())), salience=1)
    def symptom_2(self):
        self.declare(Fact(interest_loss=input("Apakah Anda merasa sulit untuk menemukan minat atau kesenangan dalam kegiatan sehari-hari? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(concentration_problems=W())), salience=1)
    def symptom_3(self):
        self.declare(Fact(concentration_problems=input("Apakah Anda merasa kesulitan berkonsentrasi atau memutuskan hal-hal? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(appetite_changes=W())), salience=1)
    def symptom_4(self):
        self.declare(Fact(appetite_changes=input("Apakah Anda merasa kehilangan nafsu makan atau makan terlalu banyak? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(weight_changes=W())), salience=1)
    def symptom_5(self):
        self.declare(Fact(weight_changes=input("Apakah Anda mengalami perubahan berat badan yang signifikan baru-baru ini? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(feeling_isolated=W())), salience=1)
    def symptom_6(self):
        self.declare(Fact(feeling_isolated=input("Apakah Anda merasa terisolasi atau tidak terhubung dengan orang lain? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(feeling_hopeless=W())), salience=1)
    def symptom_7(self):
        self.declare(Fact(feeling_hopeless=input("Apakah Anda mengalami perasaan putus asa, sedih, atau kosong secara berlebihan? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(feeling_worthless=W())), salience=1)
    def symptom_8(self):
        self.declare(Fact(feeling_worthless=input("Apakah Anda merasa kurang berharga atau bersalah tanpa alasan yang jelas? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(suicidal_thoughts=W())), salience=1)
    def symptom_9(self):
        self.declare(Fact(suicidal_thoughts=input("Apakah Anda memiliki pikiran atau dorongan untuk menyakiti diri sendiri atau berpikir tentang kematian? (yes/no): ").strip().lower()))

    @Rule(Fact(action='is_disease'), NOT(Fact(relief_activities=W())), salience=1)
    def symptom_10(self):
        self.declare(Fact(relief_activities=input("Apakah ada hal-hal yang membawa sedikit kelegaan atau sukacita dalam hari Anda? (yes/no): ").strip().lower()))

    # Rules to identify diseases
    @Rule(Fact(action='is_disease'),
          Fact(sleep_problems=MATCH.sleep_problems),
          Fact(interest_loss=MATCH.interest_loss),
          Fact(concentration_problems=MATCH.concentration_problems),
          Fact(appetite_changes=MATCH.appetite_changes),
          Fact(weight_changes=MATCH.weight_changes),
          Fact(feeling_isolated=MATCH.feeling_isolated),
          Fact(feeling_hopeless=MATCH.feeling_hopeless),
          Fact(feeling_worthless=MATCH.feeling_worthless),
          Fact(suicidal_thoughts=MATCH.suicidal_thoughts),
          Fact(relief_activities=MATCH.relief_activities),
          salience=-999)
    
    def identify_anxiety_or_depression(self, sleep_problems, interest_loss, concentration_problems, appetite_changes, weight_changes, feeling_isolated, feeling_hopeless, feeling_worthless, suicidal_thoughts, relief_activities):
        score += (0.15 if sleep_problems == "yes" else 0)
        score += (0.12 if interest_loss == "yes" else 0)
        score += (0.12 if concentration_problems == "yes" else 0)
        score += (0.1 if appetite_changes == "yes" else 0)
        score += (0.08 if weight_changes == "yes" else 0)
        score += (0.1 if feeling_isolated == "yes" else 0)
        score += (0.15 if feeling_hopeless == "yes" else 0)
        score += (0.08 if feeling_worthless == "yes" else 0)
        score += (0.15 if suicidal_thoughts == "yes" else 0)
        score += (0 if relief_activities == "yes" else 0.05)

        if score >= 0.6:
            self.declare(Fact(disease="Depression"))
        elif score >= 0.3:
            self.declare(Fact(disease="Anxiety"))
        else:
            self.declare(Fact(disease="No significant mental health issue"))

    @Rule(Fact(action='find_disease'), Fact(disease=MATCH.disease), salience=-998)
    def disease(self, disease):
        print("\nWalaupun probabilitas rendah, kamu bisa saja mengalami %s\n" % disease)

if __name__ == "__main__":
    engine = Greetings()
    engine.reset()
    engine.run()
