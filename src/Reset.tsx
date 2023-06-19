import { Button } from "@mui/material";

function ResetButton(props: { setReset: (e: boolean) => void }) {
  const { setReset } = props;
  return (
    <div>
      <Button
        sx={{
          width: 300,
          borderColor: "black",
          borderRadius: "10px",
        }}
        variant="outlined"
        color="error"
        onClick={() => setReset(true)}
      >
        Reset
      </Button>
    </div>
  );
}

export default ResetButton;
