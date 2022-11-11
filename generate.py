import argparse
import os
import sys

generator = argparse.ArgumentParser(description="Creates a new component with the relevant boilerplate files.")

generator.add_argument('Name',
                        metavar='name',
                        type=str,
                        help="the name of the component")

args = generator.parse_args()
name = args.Name

# Must follow proper React component naming convention
if not name[0].isalpha() or name[0].lower () == name[0]:
    print("The name must start with a capital letter.")
    sys.exit()

# Must not exist yet
directory = os.fsencode("src/components")
for file in os.listdir(directory):
    filename = os.fsdecode(file)
    if name == filename:
        print("Component already exists.")
        sys.exit()

# Create the boilerplate
os.mkdir(f"src/components/{name}")

def genDate():
    return "Today"

template = f'''
import styles from "./styles.module.css"

const {name} = () => {{
    return (
        <div>Smoke Test</div>
    )
}} 

export const meta = {{
    title: "{name}",
    date: "{genDate()}",
    inspiration: "",
    description: ""
}}

export default {name}
'''

with open(f"src/components/{name}/{name}.jsx", "w+") as jsx:
    jsx.write(template)

with open(f"src/components/{name}/styles.module.css", "w+") as styles:
    pass

# import-export the component
with open(f"src/components/index.js", "r") as index:
    contents = index.read()
    imports, exports = contents.split("\n//\n")

    new_imports = imports + f"\nimport _{name}, {{ meta as {name}meta }} from \"./{name}/{name}\""
    new_exports = exports + f"\nexport const {name} = {{ Component: _{name}, meta: {name}meta }};"

with open(f"src/components/index.js", "w") as index:
    index.write(new_imports + "\n//\n" + new_exports)