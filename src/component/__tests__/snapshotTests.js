import PatientTable from "../patientsTable.js";
import PrescriptionTable from "../prescriptionTable.js"
import bloodworkDetailsTable from "../bloodworkDetailsTable"
import bloodworkScheduleTable from "../bloodworkScheduleTable"
import AllPrescriptionTable from "../allPrescriptionsTable"
import Sidebar from '../Sidebar'
import BloodworkStatusButton from '../bloodworkStatusButton'
import MedicationStatusButton from '../medicationStatusButton'
import CollectPrescription from "../CollectPrescription"

const { allPatients } = require("../../helpers/firestore-helpers/database");

import Enzyme from "enzyme";
import {shallow, render, mount} from "enzyme";
import toJson from 'enzyme-to-json';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
Enzyme.configure({adapter: new Adapter()})

describe('renderSnapshots', () => {
    it('rendersPatientTable', () => {
      const wrapper = shallow(<PatientTable/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('rendersPrescriptionTable', () => {
      const wrapper = shallow(<PrescriptionTable/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderSidebar', () => {
      const wrapper = shallow(<Sidebar/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderBloodButton', () => {
      const wrapper = shallow(<BloodworkStatusButton/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderMedButton', () => {
      const wrapper = shallow(<MedicationStatusButton/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderCollectPrescription', () => {
      const wrapper = shallow(<CollectPrescription/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderBloodworkDetailsTable', () => {
      const wrapper = shallow(<bloodworkDetailsTable/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderBloodworkScheduleTable', () => {
      const wrapper = shallow(<bloodworkScheduleTable/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renderAllPrescriptionTable', () => {
      const wrapper = shallow(<AllPrescriptionTable/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });


  });

describe('DB Connection', () => {
    it('checkAllPatientsConnection', () => {
      var pateintsArray = allPatients.where("NHS_ID","==","7091277674");
      var value = "";
      pateintsArray.get().then(data => {
          data.forEach(doc => {
              value += doc.data().name;
          })
      })
      expect(value).toEqual("");
    });

  });
