Template.contribs.helpers({
    contrib_rows: function(){
        var all_contribs = Contributors.find({}, {sort: {contributions: -1, login: 1}}).fetch();
        var num_contribs = all_contribs.length;
        var num_cols = 5;
        var num_rows = Math.ceil(num_contribs / num_cols);
        var rows = _.map(_.range(num_rows), function(row_id){
            var num_items = (row_id < (num_rows - 1)) ? num_cols : num_contribs % num_cols;
            var start_id = row_id * num_cols;
            var end_id = start_id + num_items;
            var contribs = _.map(_.range(start_id, end_id), function(contrib_id){
                return all_contribs[contrib_id];
            });
            return {
                contributors: contribs
            };
        });
        return rows;
    },
});
