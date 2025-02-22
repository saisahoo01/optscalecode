import EditOrganizationConstraintNameForm from "components/EditOrganizationConstraintNameForm";
import OrganizationConstraintsService from "services/OrganizationConstraintsService";

const EditOrganizationConstraintNameFormContainer = ({ id, name, onCancel, onSuccess }) => {
  const { useUpdate } = OrganizationConstraintsService();
  const { isLoading, update } = useUpdate();

  const onSubmit = (newName) =>
    update({
      id,
      params: {
        name: newName
      },
      onSuccess
    });

  return (
    <EditOrganizationConstraintNameForm defaultName={name} onCancel={onCancel} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default EditOrganizationConstraintNameFormContainer;
