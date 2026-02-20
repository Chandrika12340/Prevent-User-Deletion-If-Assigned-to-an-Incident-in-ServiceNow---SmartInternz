(function executeRule(current, previous /* null when async */) {

    // Create GlideRecord object for Incident table
    var incGr = new GlideRecord('incident');

    // Check if the current user is assigned to any incident
    incGr.addQuery('assigned_to', current.sys_id);

    // OPTIONAL: Uncomment this line if you want to check only active incidents
    // incGr.addQuery('active', true);

    // We only need to check if at least one record exists
    incGr.setLimit(1);

    // Execute the query
    incGr.query();

    // If an incident is found, block deletion
    if (incGr.next()) {

        gs.addErrorMessage(
            'This user cannot be deleted because they are assigned to one or more incidents.'
        );

        // Abort the delete action
        current.setAbortAction(true);
    }

})(current, previous);