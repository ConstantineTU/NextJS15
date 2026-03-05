"use client";

import CustomModal from "@/components/common/modal";
import RegistrationForm from "@/forms/registration.form";

interface RegistrationModal {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModal) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Создать аккаунт">
      <RegistrationForm onClose={onClose} />
    </CustomModal>
  );
};

export default RegistrationModal;
