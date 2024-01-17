import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'team',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Team.home.title' },
    loadChildren: () => import('./RosterMicroV1/team/team.routes'),
  },
  {
    path: 'team-plan',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1TeamPlan.home.title' },
    loadChildren: () => import('./RosterMicroV1/team-plan/team-plan.routes'),
  },
  {
    path: 'resource',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Resource.home.title' },
    loadChildren: () => import('./RosterMicroV1/resource/resource.routes'),
  },
  {
    path: 'resource-plan',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1ResourcePlan.home.title' },
    loadChildren: () => import('./RosterMicroV1/resource-plan/resource-plan.routes'),
  },
  {
    path: 'shift-demand',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1ShiftDemand.home.title' },
    loadChildren: () => import('./RosterMicroV1/shift-demand/shift-demand.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Task.home.title' },
    loadChildren: () => import('./RosterMicroV1/task/task.routes'),
  },
  {
    path: 'facility',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Facility.home.title' },
    loadChildren: () => import('./RosterMicroV1/facility/facility.routes'),
  },
  {
    path: 'shift-type',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1ShiftType.home.title' },
    loadChildren: () => import('./RosterMicroV1/shift-type/shift-type.routes'),
  },
  {
    path: 'ref-calendar',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1RefCalendar.home.title' },
    loadChildren: () => import('./RosterMicroV1/ref-calendar/ref-calendar.routes'),
  },
  {
    path: 'resource-training',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1ResourceTraining.home.title' },
    loadChildren: () => import('./RosterMicroV1/resource-training/resource-training.routes'),
  },
  {
    path: 'training',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Training.home.title' },
    loadChildren: () => import('./RosterMicroV1/training/training.routes'),
  },
  {
    path: 'position-requirement',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1PositionRequirement.home.title' },
    loadChildren: () => import('./RosterMicroV1/position-requirement/position-requirement.routes'),
  },
  {
    path: 'position',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Position.home.title' },
    loadChildren: () => import('./RosterMicroV1/position/position.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Department.home.title' },
    loadChildren: () => import('./RosterMicroV1/department/department.routes'),
  },
  {
    path: 'shift',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Shift.home.title' },
    loadChildren: () => import('./RosterMicroV1/shift/shift.routes'),
  },
  {
    path: 'shift-template',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1ShiftTemplate.home.title' },
    loadChildren: () => import('./RosterMicroV1/shift-template/shift-template.routes'),
  },
  {
    path: 'role',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1Role.home.title' },
    loadChildren: () => import('./RosterMicroV1/role/role.routes'),
  },
  {
    path: 'resource-roles',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1ResourceRoles.home.title' },
    loadChildren: () => import('./RosterMicroV1/resource-roles/resource-roles.routes'),
  },
  {
    path: 'ref-rotation',
    data: { pageTitle: 'rosterMicroV1App.rosterMicroV1RefRotation.home.title' },
    loadChildren: () => import('./RosterMicroV1/ref-rotation/ref-rotation.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
