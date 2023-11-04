import Modal from '../Modal/Modal';
import LearnMoreForm from 'components/LearnMoreForm/LearnMoreForm';

const LearnMoreModal = ({ advert, onModalClose }) => {
  return (
    <>
      <Modal isModalActive onClose={onModalClose}>
        <LearnMoreForm advert={advert} />
      </Modal>
    </>
  );
};
export default LearnMoreModal;
