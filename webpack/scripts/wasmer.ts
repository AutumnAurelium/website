import type { Instance } from "@wasmer/sdk";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";

const encoder = new TextEncoder();
const params = new URLSearchParams(window.location.search);

const packageName = "sharrattj/bash";
const logFilter = params.get("log") || "warn";

async function loadFileAsBytes(url: string): Promise<Uint8Array> {
    try {
        // Fetch the file
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the file as an ArrayBuffer
        const arrayBuffer = await response.arrayBuffer();

        // Convert ArrayBuffer to Uint8Array
        const bytes = new Uint8Array(arrayBuffer);

        return bytes;
    } catch (error) {
        console.error("Error loading file:", error);
        throw error;
    }
}

async function main() {
    // Note: We dynamically import the Wasmer SDK to make sure the bundler puts
    // it in its own chunk. This works around an issue where just importing
    // xterm.js runs top-level code which accesses the DOM, and if it's in the
    // same chunk as @wasmer/sdk, each Web Worker will try to run this code and
    // crash.
    // See https://github.com/wasmerio/wasmer-js/issues/373
    const { Wasmer, init } = await import("@wasmer/sdk");

    await init({ log: logFilter });

    const term = new Terminal({ cursorBlink: true, convertEol: true });
    //   const fit = new FitAddon();
    //   term.loadAddon(fit);
    term.open(document.getElementById("terminal")!);
    //   fit.fit();

    term.writeln("Starting...");

    let bytes = loadFileAsBytes("/assets/")
    //   const pkg = await Wasmer.fromRegistry(packageName);

    term.reset();
    //   const instance = await pkg.entrypoint!.run({ args, uses });
    //   connectStreams(instance, term);
}

function connectStreams(instance: Instance, term: Terminal) {
    const stdin = instance.stdin?.getWriter();
    term.onData(data => stdin?.write(encoder.encode(data)));
    instance.stdout.pipeTo(
        new WritableStream({ write: chunk => term.write(chunk) }),
    );
    instance.stderr.pipeTo(
        new WritableStream({ write: chunk => term.write(chunk) }),
    );
}

main();