import { File, Folder, Tree } from "@/components/magicui/file-tree";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem, 
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileTabs } from "./components/Tabs";
import FilesBarPanel from "./components/FilesBarPanel";

export default function page() {
  return (
    <div className="relative flex overflow-hidden rounded-lg md:shadow-xl">
      <div className="flex h-[600px]">
        <div className="flex-1 items-center justify-center border-r-2 border-r-slate">
          <ScrollArea className="w-[300px]">
            <FilesBarPanel/>
            <Tree
            
              className="p-2 overflow-hidden rounded-md"
              initialSelectedId="7"
              initialExpandedItems={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
              ]}
              elements={ELEMENTS}
            >
              <ContextMenu>
                <ContextMenuTrigger >
                  <Folder element="src" value="1">
                    <Folder value="2" element="app">
                      <File value="3">
                        <p>layout.tsx</p>
                      </File>
                      <File value="4">
                        <p>page.tsx</p>
                      </File>
                    </Folder>
                    <Folder value="5" element="components">
                      <Folder value="6" element="ui">
                        <File value="7">
                          <p>button.tsx</p>
                        </File>
                      </Folder>
                      <File value="8">
                        <p>header.tsx</p>
                      </File>
                      <File value="9">
                        <p>footer.tsx</p>
                      </File>
                    </Folder>
                    <Folder value="10" element="lib">
                      <File value="11">
                        <p>utils.ts</p>
                      </File>
                    </Folder>
                  </Folder>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                  <ContextMenuItem inset>
                    Copy
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset>
                    Move
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset>
                    Rename
                    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset>
                    Delete
                    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuSub>
                    <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>
                        Save Page As...
                        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                      <ContextMenuItem>Name Window...</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Developer Tools</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                  <ContextMenuSeparator />
                  <ContextMenuCheckboxItem checked>
                      Collapse All
                    <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                  </ContextMenuCheckboxItem>                  
                  <ContextMenuSeparator />                  
                </ContextMenuContent>
              </ContextMenu>
            </Tree>
          </ScrollArea>
        </div>
        <div className="flex-1 min-w-full">
        <FileTabs />       
        </div>
      </div>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
