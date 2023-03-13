import { Box, Modal } from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import style from "./style.module.css";

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  outline: 0
};

export function ModalEdit(props) {
  const navigate = useNavigate();


  function handleChange(e) {
    props.setForm({ ...props.form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.patch("/user/edit-profile", props.form);

      props.setOpen(false);
      props.setReload(!props.reload);
    } catch (error) {
      toast("Username already exist.");
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await api.delete("user/delete");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleToast() {
    toast((t) => (
      <span>
        Delete your account?
        <button className={style.delete} onClick={handleDelete}>Yes</button>
        <button className={style.btnNo} onClick={() => toast.dismiss(t.id)}>No</button>
      </span>
    ));
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <h1 className={style.title}>Edit your profile</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.form}>
              <label htmlFor="formUsername">Username:</label>
              <input
                type="text"
                id="formUsername"
                name="username"
                onChange={handleChange}
                value={props.form.username}
              />
            </div>
            <div className={style.btn}>
              <button type="submit">Send</button>
              <button className={style.delete} onClick={handleToast}>Delete Profile</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
