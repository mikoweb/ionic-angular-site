// [ external elements ]

// [ internal elements ]

// -- elements module
import { IconButtonComponent } from '@app/shared/ui/elements/icon-button/icon-button.component';
IconButtonComponent.register();

import { NavComponent } from '@app/shared/ui/elements/nav/nav.component';
NavComponent.register();

// -- user module
import {
  UserFullNameDisplayComponent
} from '@app/module/user/ui/elements/user-full-name-display/user-full-name-display.component';
UserFullNameDisplayComponent.register();
