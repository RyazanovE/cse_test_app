import {render} from "@testing-library/vue"
import OrangeButton from "../../../shared/ui/buttons/orange/OrangeButton.vue"

import UsersPage from "./UserPage.vue"

test("uesrs page test", () => {

 const {debug} = render(OrangeButton)

 debug()

})