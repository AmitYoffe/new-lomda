import { Box, Button, Typography } from "@mui/material";
import Particles from "react-tsparticles";
import UserGreetings from "~/components/UserGreetings";

export default function Index() {

  return (
    <>
      {/* Right section */}
      <Box sx={{
        gap: 1,
      }}>
        <Box sx={{ position: "absolute", top: '18px', left: '18px', color: 'white' }}>
          <UserGreetings firstname={"חיימון"} lastname={"חיימקה"} />
        </Box>
        <Particles id="tsparticles" />
        <Box sx={{ display: "flex", justify: 'center', color: 'white' }}>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
          <Button> ahhhhh </Button>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
          <Typography sx={{ color: 'white' }}> I DID IT!!!!!!!!!!!!!!!!</Typography>
        </Box>
      </Box>
    </>
  );
}

// export async function action({ request }: ActionArgs) {
//   const formData = await request.formData();
//   // const userId = 1;
//   const { _action, ...rest } = Object.fromEntries(formData)

//   switch (_action) {
//     case 'appClicked': {
//       const { appId } = rest
//       // TODO: get real user
//       const userId = await getUser();
//       await updateAppClick(Number(appId), userId)
//       break;
//     }
//     case 'dashboardClicked': {
//       const { dashboardId } = rest
//       // TODO: get real user
//       const userId = await getUser();
//       await updateDashboardClick(Number(dashboardId), userId)
//       break;
//     }
//     case 'createContact': {
//       const body = rest as never as Contact;
//       const { formData, errors } = await validationAction<createContactInput>({
//         body,
//         schema: createContactSchema,
//       });

//       if (errors) {
//         return json({ errors }, { status: 400 });
//       }
//       // TODO: get real user
//       const userId = 1
//       await createContact(formData as Contact, userId)
//       break;
//     }
//     case 'updateContact': {
//       const body = rest as never as Contact;
//       const { formData, errors } = await validationAction<updateContactInput>({
//         body,
//         schema: updateContactSchema,
//       });

//       if (errors) {
//         return json({ errors }, { status: 400 });
//       }

//       const { id, ...updatedContact } = formData
//       // TODO: get real user
//       const userId = 1
//       await updateContact(id, updatedContact as Contact, userId)
//       break;
//     }
//     default:
//       break;
//   }
//   return null;
// }