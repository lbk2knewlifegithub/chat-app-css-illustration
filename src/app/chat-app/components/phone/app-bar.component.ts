import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-app-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="relative p-6 max-h-20 bg-gradient-to-r from-light-violet to-light-magenta"
    >
      <!--      ornament-->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-white w-[60%] h-12"
      ></div>
      <!--      end ornament-->

      <div class="flex items-center justify-between mt-3">
        <div class="flex items-center gap-2">
          <!--        back-->
          <button>
            <img
              class="duration-300 max-w-[10px] invert-[1] hover:!-translate-x-2"
              src="/assets/images/left-arrow.png"
              alt="Back"
            />
          </button>
          <!--        end back-->

          <div class="flex gap-3">
            <!--      avatar-->
            <div
              class="rounded-full w-[40px] overflow-hidden border-2 border-white"
            >
              <img src="/assets/images/avatar.jpg" alt="Avatar" />
            </div>
            <!--      end avatar-->

            <!-- name -->
            <h6 class="font-medium text-white">Samuel Green</h6>
            <!-- end name -->
          </div>
        </div>

        <!--      menu-->
        <lbk-kebab-menu></lbk-kebab-menu>
        <!--      end menu-->
      </div>
    </div>
  `,
})
export class AppbarComponent {}
