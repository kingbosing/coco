var template=`
            <el-dialog title="确定参与"
                           :visible.sync="centerDialogVisible"
                           width="500px"
                           id="isSureAdd">
                    <div style="width:50%;float:left;height:500px;overflow:auto">                     
                        <el-tree :data="loadNode1"
                                 show-checkbox
                                 ref="Deptree"
                                 :props="props1"
                                 :check-strictly="true"
                                 node-key="ItemId"
                                 default-expand-all
                                 :expand-on-click-node="false"
                                 v-on:check-change="currentChange"
                                 >
                            <span class="custom-tree-node" slot-scope="{ node, data }">
                                <span>{{ node.Name }}-{{data.Name}}</span>
                               
                            </span>
                        </el-tree>
                    </div>
                    <div style="width:45%;float:right;height:500px;overflow:auto">
                        <p v-for="k in actDep">{{k.Name}}</p>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button size="small" v-on:click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="warning" size="small" v-on:click="isOk">确 定</el-button>
                    </span>
                </el-dialog>

            `
var testTemplate = {
    template: template,
    data:function(){
        return {msg:'我的局部组件2'}
    },
    methods:{
        change:function(){
             //todo
            console.log(this);
        }
    }
};