// [ external elements ]

// [ internal elements ]

// -- elements module
import { IconButtonComponent } from '@app/module/elements/application/icon-button/icon-button.component';
IconButtonComponent.register();

import { NavComponent } from '@app/module/elements/application/nav/nav.component';
NavComponent.register();

// -- user module
import {
  UserFullNameDisplayComponent
} from '@app/module/user/application/elements/user-full-name-display/user-full-name-display.component';
UserFullNameDisplayComponent.register();
