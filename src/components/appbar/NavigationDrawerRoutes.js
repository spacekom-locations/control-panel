export default [
  {
    titleKey: "Supervisors",
    icon: "mdi-account-tie-outline",
    name: "Supervisors.index",
    hasOneOf: [
      "supervisors::add",
      "supervisors::remove",
      "supervisors::retrieve",
      "supervisors::update",
      "supervisors::view_role",
      "supervisors::set_role",
      "supervisors::revoke_role",
      "supervisors::view_permissions",
    ],
  },
  {
    titleKey: "Roles",
    icon: "mdi-tag-text-outline",
    name: "Roles.index",
    hasOneOf: [
      "roles::add",
      "roles::remove",
      "roles::retrieve",
      "roles::update",
      "roles::view_permissions",
      "roles::set_permissions",
    ],
  },
];
