import ChatInputGroup from '../components/chat/ChatInputGroup';
import YearSelect from '../components/chat/year/YearSelect';
import MakeSelect from '../components/chat/make/MakeSelect';
import ModelSelect from '../components/chat/model/ModelSelect';
import ColorSelect from '../components/chat/color/ColorSelect';
import DriverSelect from '../components/chat/driver/DriverSelect';
import NICInput from '../components/chat/nic/NICInput';
import PassportInput from '../components/chat/passport/PassportInput';
import PassportCountrySelect from '../components/chat/passport/PassportCountrySelect';
import DateInput from '../components/chat/date/DateInput';
import LicenseSelect from '../components/chat/license/LicenseSelect';
import { QUESTION_TYPES } from '../data/questions/questionFlow';

export const renderQuestionInput = (question, values, onChange) => {
  switch (question.type) {
    case QUESTION_TYPES.TEXT_INPUT:
      return (
        <ChatInputGroup 
          values={values} 
          onChange={onChange} 
        />
      );
    case QUESTION_TYPES.YEAR_SELECT:
      return (
        <YearSelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.MAKE_SELECT:
      return (
        <MakeSelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.MODEL_SELECT:
      return (
        <ModelSelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.COLOR_SELECT:
      return (
        <ColorSelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.DRIVER_SELECT:
      return (
        <DriverSelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.NIC_INPUT:
      return (
        <NICInput
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.PASSPORT_INPUT:
      return (
        <PassportInput
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.PASSPORT_COUNTRY:
      return (
        <PassportCountrySelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.DATE_INPUT:
      return (
        <DateInput
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    case QUESTION_TYPES.LICENSE_SELECT:
      return (
        <LicenseSelect
          value={values[question.field]}
          onChange={(value) => onChange(question.field, value)}
        />
      );
    default:
      return null;
  }
};